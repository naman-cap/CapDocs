---
title: Workforce IAM for Employees
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
Workforce Identity and Access Management (IAM) ensures secure and seamless authentication for employees accessing Capillary's internal systems and applications. Capillary supports multiple authentication methods to enhance security and streamline access management for employees, using the following authentication methods:

* **Login & Password**: Employees can log in using their email ID and password.  
  * **[2FA\- OTP](https://docs.capillarytech.com/reference/multi-factor-authentication)**: Two-factor authentication using One-Time Passcodes (OTP) is supported.  
  * **[Single Sign-On (SSO)\- Using Okta:](https://docs.capillarytech.com/docs/single-sign-on-sso-using-okta)** Capillary uses Okta to enable and integrate SSO, allowing users to access multiple applications and systems with one set of login credentials. 

**Authentication Types Supported**

* **[OAuth](https://docs.capillarytech.com/docs/oauth2-client-credentials-flow)**: This auth flow is used when the API requests are made from a program or service running on a server. This flow uses an access token to authenticate an API request.  
* **[Basic auth](https://docs.capillarytech.com/docs/basic-authentication-api)**: This is used where POS terminals are directly integrated with Capillary server. This flow uses Till ID and MD5 hash encoded password to authenticate an API request.  
* **Mobile APIs auth service**: End customer apps can be integrated using Mobile APIs auth service, using username & password/OTP, till username & password or Custom & non-standard (non oAuth2 or OIDC) authorization. No social login options are supported.
