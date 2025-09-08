---
title: OND 2023 | CDP Releases
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
# Templates for OTP messages

Until now, for SMS and Email channels, the templates (or the message body) had to be passed as part of the body of the v2/otp/generate every time an OTP had to be sent. In case the template needed changing, there was a dependency on the implementation team to update the API request body at the integration layer. With the new OTP templates feature, systems integrators can now configure templates on our platform for various actions supported by the v2/otp/generate API. That means, that if the template needs changing, template updates can be made on our platform instead of making changes at the integration layer. [Documentation link](https://docs.capillarytech.com/reference/otp-template-guidelines)

Next update on this track: UI for configuring OTP templates + support for more channels.

# User On-boarding with Permissions

Until now, there was a dependency on the access team to assign permissions (access to Engage+, for example) to new users who are added to InTouch - our product platform - via the Admin Users import profile or via the user creation UI. With the new Connect+ template to on-board users to InTouch, Customer Success Managers (CSMs) can create new users and also assign permissions to them in one go, thereby removing dependency on the access team partially.[Documentation link](https://docs.capillarytech.com/docs/onboard-users-to-intouch)

Next update on this track: Support for updating existing user permissions using the same template.

# Set Expiry Period for Refresh Token Key

On successful authentication of a user on our auth engine, an access token is generated along with a refresh token or key. Until now, there was no way to set an expiry period for the refresh token. If it were compromised, a malicious attacker could use it to call the token regenerate end point and generate a new access token, thereby gaining access to protected resources. To prevent this scenario from occurring, we have introduced a new configuration to set an expiry period for the refresh token. [Link](https://docs.capillarytech.com/reference/validate-password#configuring-validity-for-the-key)

# Config to skip OTP validation for MFA

We have introduced configs in the auth engine for skipping the OTP validation step while setting up or resetting the Multi-factor Authentication(MFA) pin or password. System integrators can utilize these configurations for improving app usability, if required, in certain scenarios. [Link](https://docs.capillarytech.com/reference/multi-factor-authentication)

# Mitigating abuse of OTP generate API

Recently, we have seen a few bot attacks wherein the OTP generate API has been abused, leading to financial losses. We have made an enhancement to mitigate such attacks on auth engine OTP API. [Link](https://docs.capillarytech.com/reference/generate-otp-api#encrypting-the-api-payload)
