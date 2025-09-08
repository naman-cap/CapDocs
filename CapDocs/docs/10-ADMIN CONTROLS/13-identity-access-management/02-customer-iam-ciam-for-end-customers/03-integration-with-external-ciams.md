---
title: Integration with External CIAMs
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
Capillary allows integration with external CIAM solutions, enhancing security, ensuring compliance with standards like OpenID, and supporting various user authentication methods. Capillary offers out-of-the-box (OOB) integrations with Auth0, Cognito, and Janrain. To integrate any CIAMs, enhancements are made to the Capillary API gateway, which is integrated with Capillary's authentication engine.

As an initial phase of the process, it enables to deploy [NextReason](https://nextreason.com/) CIAM for identity management purposes on their loyalty applications. This allows you to access features such as OpenID compliance, support for multiple authentication methods, audit logging etc.

# Configuration

**Prerequisite:** Knowledge of the configuration of NextReason as the CIAM for your application.

Perform the following to configure  NextReason on the Capillary deployment server and Intouch:

1. If the brand does not exist for your org, create the brand corresponding to the organization where you want to set up NextReason CIAM integration on the deployment server.
2. Add the following configurations from your NextReason setup to the Capillary API gateway.  
   1. Application ID \- This is obtained after the successful registration and configuration of NextReason for your application.  
   2. Client ID \- For Oauth client credentials flow  
   3. First name, last name, mobile and email field mappings \- Key-value pairs that map first name, last name, mobile and e-mail fields on Capillary's customer entity with the claims that come with the ID token post authentication on NextReason.  
   4. Name of brand  
   5. User info endpoint  
   6. JSON Web Key Set URI\
      ❗️ There is no UI on the deployment server for adding these details as of now. Please raise a ticket to the sustenance team with the aforementioned details for adding these configurations until UI is made available.
3. To capture the customer profile identifier generated on NextReason, set up a new channel account within your organization and link it to Intouch.  Perform the following:  
   1. Navigate to   **Organisation Settings\-\> Omni Channel Settings \>  Channel Configurations**.  
   2. Search for `OAUTH_EXTERNAL` and click **Add Account**.  
   3. Enter the account name and source account ID, as shown in the screenshot below. Unlike the WebEngage account setup, the account name and ID hold no significance in this context. These are placeholder values and do not have any functional relevance.

![36cb392 Account](https://files.readme.io/36cb392-Account.png)

<br />

The integration setup on the Capillary side is complete. You can proceed with testing the integration with NextReason. After successfully completing the integration, when a customer is registered through NextReason, the NextReason-generated user identifier (UUID) will be displayed in the cuid field on Member Care under the `OAUTH_EXTERNAL` source profile.

## Notes

2. Capillary API gateway works as a service provider with NextReason as an identity provider. OAuth scopes, however, are not supported.  
3. Only user login, logout and profile update flows have been tested.  
4. During the registration process, NextReason can only capture a limited set of fields, including First name, last name, mobile number, and e-mail address. If you require additional customer details for loyalty purposes, you must implement a separate registration flow in addition to the NextReason-supported account creation flow.\
   To achieve this, you should make a separate customer registration API call from the app, specifying the source as "Instore" along with customer identifiers and metadata.  
5. To initiate an identifier change, you need to perform a two-step process similar to the registration process. First, the identifier change should be executed on the NextReason side. After that, a separate customer identifier update API call should be made to the Capillary platform to make sure that the changes are reflected accordingly.
