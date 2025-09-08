---
title: Authentication
excerpt: >-
  This page provides you with information on enabling basic auth and creating
  API client key and secret.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: link
      title: Access group
      url: https://docs.capillarytech.com/docs/access-group
---
Capillary supports three types of authentication:

1. Basic 
2. OAuth 
3. Authentication for end-customer web and mobile apps

# Basic authentication

In basic authentication, the till ID and password (in MD5 format) are used for authenticating the APIs. For information on creating a till ID and password, see [Add till](https://docs.capillarytech.com/docs/store-hierarchy-1#add-till).

## Enabling basic authentication

To enable or disable basic authentication, perform the following:

1. Log on to InTouch of your cluster.

2. Navigate to the **Profile icon > Organization Settings > Tools > Authentication**.

![17c930d Authentication](https://files.readme.io/17c930d-Authentication.png)

3. Click the **API client** tab.
4. Click **Modify** .

![0a1d6d6 orgg](https://files.readme.io/0a1d6d6-orgg.png)

5. Use the **Enable Basic Authentication**  toggle switch to enable or disable basic authentication.\
   By default, basic authentication is always enabled.

![54a5bde Enable basic auth](https://files.readme.io/54a5bde-Enable_basic_auth.png)

# OAuth authentication

OAuth (Open Authorization) is a standardized framework that enables secure and controlled access to resources, such as data and services, without requiring the sharing of sensitive credentials, like passwords.

In OAuth, API client key and secret or access token are used for API authentication.

## Creating an API client key and secret

Perform the following:

1. Log on to InTouch of your cluster.

2. Navigate to the **Profile icon > Organization Settings > Tools > Authentication**.

![17c930d Authentication](https://files.readme.io/17c930d-Authentication.png)

3. Click the **API client** tab.
4. Click Register.

![b458f7d register](https://files.readme.io/b458f7d-register.png)

5. In **Client name**, enter a name for the client.

![f690f6e Access](https://files.readme.io/f690f6e-Access.png)

6. In the **Description**, enter a short description of the client.
7. In **Token expiry duration**, set the default expiry for the tokens created for the client. By default, the maximum duration of an access token that you can set is configured as 60 minutes. An error message is displayed, if you try to set the token expiry duration for more than 60 minutes. This is for `/v3/oauth/token/generate`only. For information on creating an access token, see [Generating access token](https://docs.capillarytech.com/reference/oauth#generating-access-token).

![06e18e0 60 min limit](https://files.readme.io/06e18e0-60_min_limit.png)

> 📘 If required, you can raise a[ticket](https://capillarytech.atlassian.net/browse/CAP-100842) and set the maximum token expiry duration that you can set to 30 days. You can set the duration in minutes, hours or days. An error message is displayed if you try to set the maximum duration for more than 30 days.

![40e1b46 Token 30 days](https://files.readme.io/40e1b46-Token_30_days.png)

> 🚧 For security reasons, Capillary does not recommend setting the token duration for more than 60 minutes.

8. In **Default till code**, enter default till code for the API and click **Validate**. If a till code is not passed in the API header, the default till is used for API attribution.
9. Select the default till code check box to use this till code for API attribution, If an invalid till is passed in the API header.
10. From the **Access group** drop-down, select the appropriate access group for your API client. For information on access groups, see [Access group](https://docs.capillarytech.com/docs/access-group). This access group restriction is applicable only for the API client and not the till.

![ac9b19c Select access group](https://files.readme.io/ac9b19c-Select_access_group.png)

11. Click **Next**. The Client key and Client secret are generated for the client.

![11dd3fd clie](https://files.readme.io/11dd3fd-clie.png)

12. Copy the Client key and client secret and use it for authentication (OAuth). 
    > 🚧 After the client key and secret are generated, if you exit the API Credentials page, you cannot access the client secret again for that client
13. Click **Done** to close the screen.
14. To create more API client accounts, click **New API Client**.

![825679d clienttt](https://files.readme.io/825679d-clienttt.png)

![916d8e7 demo](https://files.readme.io/916d8e7-demo.png)

> 🚧 After the client key and secret are generated, if you exit the API Credentials page, you cannot access the client secret again for that client

## Creating an access token

You can use the API client key and secret and create an access token for authentication. For information on creating an access token, see [Generating access token](https://docs.capillarytech.com/reference/oauth#generating-access-token).
