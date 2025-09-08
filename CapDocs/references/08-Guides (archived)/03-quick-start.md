---
title: Get Started
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

Hope you got an understanding of the different entities that we have and what host to use, headers and authentication as per the requirement.

Get your API keys, and authenticate to make your API calls.

API or (application programming interface) key is a unique identifier used to authenticate a user, or program calling an API. However, they are typically used to authenticate a project with the API rather than a human user. Different platforms may implement and use API keys in different ways.

Capillary APIs can be accessed either using Basic auth (TILL/Store Center credentials), or OAuth (Client key and secret associated with a Till/Store Center). Please note that it is mandatory to use only the store-specific Till/Store Center credentials as the data in the API response depends on this identification.

To configure your API keys, see [API Authentication Configuration](http://developer.capillarytech.com/en/support/solutions/articles/4000154305-oauth).

The following sections provide step-by-step instructions on how to use different authentications to make an API call.

## Basic Authentication


You can either pass the `Authorization` Header or use Till ID and password for authentication through Basic Auth.

### Authorization Header


Construct the authorization header as mentioned below - pass the Base64 decoded form of username and md5 formatted password.

`Authorization: Basic &lt;Base64 encoded (username:md5(password))&gt;`

For example, if the username or TILL ID is `store.server123` and the password is 'server123', md5 of the password.

For example, if the username is `store.server` and the password is 'server123',

* md5 encryption of the password (server123) is `8a16a6b70505eb1f1ff7cdc0cd5559a7`.
* Base 64 (store.server:8a16a6b70505eb1f1ff7cdc0cd5559a7) is `c3RvcmUuc2VydmVyOjhhMTZhNmI3MDUwNWViMWYxZmY3Y2RjMGNkNTU1OWE3`.

So the Authentication Header is

`Authorization: Basic c3RvcmUuc2VydmVyOjhhMTZhNmI3MDUwNWViMWYxZmY3Y2RjMGNkNTU1OWE3`

### Username & Password


To use username and password for authentication, pass TILL ID as username and md5 hash encrypted password.

Consider the preceding example:

username: store.server

Password: md5 hash (server123) which is 8a16a6b70505eb1f1ff7cdc0cd5559a7

You can create TILL credentials in Organization Setup. To know more see Add TILL 

Now, v2 API supports submitting requests on behalf of other TILLs (active TILLs). In db, the combination of attribution_lookup and lookup_code are mapped to TILL ids and org ids. When a new POST request is placed with the combination of a lookup name and lookup code, the data will be inserted in the db on behalf of the TILL that is mapped to the specified combination.

To submit requests on behalf of other TILLs, include the following code along with the HEADER:

`X-CAP-API-ATTRIBUTION-LOOKUP-TYPE:`
`X-CAP-API-ATTRIBUTION-LOOKUP:`(value is case sensitive)

## OAuth


OAuth provides better security and helps you create secure passages to access your org’s data through Capillary APIs. To generate oAuth client key and secret see OAuth Documentation.

### Generate Access Token


Once you get key and secret, you can generate access token or JWT (JSON Web Token) using the token/generate API. JWT is a compact URL and JSON-based used to transfer data securely between two parties.

#### Resource Information

| | |
--------- | ----------- |
URI	| `/oauth/token/generate`
API Version | v3
HTTP Method | POST
Authentication Required? | No
Batch Support? | No

#### Endpoint

`{host}/v3/oauth/token/generate`

#### POST Request Schema


```handlebars
https://eu.api.capillarytech.com/v3/oauth/token/generate

```

<Note title="Note">

>
> The token validity will be as per the value set for the client (Token expiry duration).
</Note>

```handlebars
https://eu.api.capillarytech.com/v3/oauth/token/generate

```

```json
{
    "key": "WnCygRI1Fmlf6YudKwTxQq1LI",
    "secret": "hoqSBz6VwefECaZA8Q3oNx4V4H3pMDITksarZVES"
}
```

```json
{
    "data": {
        "accessToken": "eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJDYXBpbGxhcnkiLCJleHAiOjE1NzUyNzAyNzAsImp0aSI6IjJaX2FqUjcwYzJABChVUjlDVTVpUlEiLCJpYXQiOjE1NzUyNjk5NzAsInN1YiI6Im5hbWVfODQzNjIwODIwMSIsImNsaWVudF9pZCI6MjEsIm9yZ19pZCI6MTExNSwidG9rZW5fdXNlIjoidG9rZW5fYWNjZXNzIn0.Ala1-XTDlPtrHFQfCtJKsXe3h_WVyq4QOGI3ZnLNJqOa-yJc1UPGbypUysWemzEaiQC_BJ0n9G68SYkVZGi4CSVOhHRNA_dILe8y1Sa90YZKwHVHogJmIKzLmksJrTbjn8s8hSMePBaaUcEdUZ1XssxdFrZhEHHN1fWVYtkdb74PB3sZ7OMDqKUysON8YTNQxLgKOJ3kq0o2QUUDQo1q3gxXFuswate6-jj3oBkcdd1ohhXkPIWZlAb_1lRcLr-ECaaBfh473gayeMVV_6khdKJ7cXrUQ3CXppkrPIzBb7rS6I93iWZw0IlmWbaGduTmPPOhLX6HZLOb84Y28st-cw",
        "ttlSeconds": 300
    },
    "errors": null
}
```

### Using Access Token


Once you generate the access token, you can use it to authenticate API calls as shown below.

Set the authentication to No Auth and pass the following headers.

Header | Value
------ | -----
X-CAP-API-OAUTH-TOKEN* | Generated access token. If the token expires, you need to regenerate the access token.
Content-Type* | This should be set as application/json
Accept* | This should also be set as application/json
X-CAP-API-ATTRIBUTION-ENTITY-TYPE | Till or store from which you want to post the data. Supported Values: `TILL`, `STORE_CODE`, `STORE_NAME`, `STORE_EXTERNAL_ID`, `STORE_EXTERNAL_ID_1`, `STORE_EXTERNAL_ID_2`. The default value is `TILL`.
X-CAP-API-ATTRIBUTION-ENTITY-CODE | Pass the entity value based on the entity type. For example, if `X-CAP-API-ATTRIBUTION-ENTITY-TYPE` is STORE_CODE, then X-CAP-API-ATTRIBUTION-ENTITY-CODE is the store code that you want to tag to POST data. By default, it considers the Till associated with the client key and secret.