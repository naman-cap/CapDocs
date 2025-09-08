---
title: Auth for consumer or end-customer apps
excerpt: >-
  This page provides information on authentication for consumer end web and
  applications.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 🚧
>
> For Consumer-end customer applications, Capillary provides basic capabilities only, and recommends using External Customer Identity & Access Management tools for providing more convenient and advanced security features. For more information, refer to the [API Gateway Integration with CIAM Platforms](https://docs.capillarytech.com/docs/api-gateway-integration-with-ciam-platforms).

Customer or user authentication is an Auth Engine framework that manages end-user (customer) authentication to the organization’s mobile or web application. This resource provides APIs related to authenticating web and mobile applications.

The authentication completes only after validating the mobile number or email ID through OTP.

Before starting with the Auth Engine APIs, you need to know the following backend configurations.

* Whether the password option is enabled for the org if you want to use password-based authentication.
* Whether OTP is enabled for the org and the daily limit of OTPs a customer can generate. If you need to increase the daily limit of OTPs a customer can generate in a day, log a request and assign it to the Platforms team.

Here we have provided only the details of Auth Engine APIs.

For information on Auth engine/User authentication settings, see [Auth Engine or User Authentication](https://docs.capillarytech.com/docs/configure-authentication-settings).

### Host  URLs for Auth Engine

* **APAC**: [https://apac-s3wrapper.capillarytech.com](https://apac-s3wrapper.capillarytech.com)
* **APAC2**: [https://apac2-auth-api.capillarytech.com](https://apac2-auth-api.capillarytech.com)
* **EU**: [https://eu-auth-api.capillarytech.com](https://eu-auth-api.capillarytech.com)

### API Gateway URLs

* **APAC**: [https://apac-apigateway.capillarytech.com/mobile](https://apac-apigateway.capillarytech.com/mobile)
* **APAC2**: [https://apac2-api-gateway.capillarytech.com/mobile](https://apac2-api-gateway.capillarytech.com/mobile)

<Note title="Note">
The host URL for Auth Engine is different from generic CRM V1.1 and V2 APIs.
</Note>
