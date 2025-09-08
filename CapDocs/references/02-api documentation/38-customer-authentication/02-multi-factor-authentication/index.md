---
title: Multi-factor authentication
excerpt: This page provides you with information on multi-factor authentication.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Multi-factor authentication (MFA) is a security process in which users provide two or more authentication factors to verify their identity. 

# Enabling MFA

To use MFA, your brand must enable it. The configuration IS\_MFA\_ENABLED determines if MFA is active. To enable MFA, please raise a ticket with the sustenance team.

# MFA Flow

Below is a flow chart indicating the steps involved in OTP validation. The steps are the same for new and existing users of a brand.

![32be804 MFA OTP FLOW](https://files.readme.io/32be804-MFA_OTP_FLOW.jpg)

# MFA flow with 2nd factor identifier

To enable the 2nd factor identifier, use the config CONF\_AUTO\_FILL\_2ND\_FACTOR\_IDENTIFIER. See [General configurations](https://docs.capillarytech.com/reference/authentication-configurations#general-configurations)

If you enable it, the auth engine automatically populates the identifier type and value for each API in the MFA flow. This occurs for the particular session for which the token is generated from the primary flow.

The flow diagram below illustrates the steps involved and how the identifier type and value are populated.

![c801a83 Screenshot 2nd factor](https://files.readme.io/c801a83-Screenshot_2nd_factor.png)

The table below shows the four authentication combinations supported in the 2nd factor identifier.

| Authentication method in the primary flow | Authentication method in MFA flow |
| :---------------------------------------- | :-------------------------------- |
| OTP                                       | OTP                               |
| OTP                                       | Password                          |
| Password                                  | OTP                               |
| Password                                  | Password                          |

## OTP - OTP workflow

Below is a flow diagram indicating the steps involved and how the identifier type and value are populated when the authentication combination is OTP - OTP.

![d44ad9a otp otp 2nd factor](https://files.readme.io/d44ad9a-otp_otp_2nd_factor.jpg)

## OTP - Password workflow

Below is a flow diagram indicating the steps involved and how the identifier type and value are populated when the authentication combination is OTP - Password.

![1d84341 otp password 2nd factor](https://files.readme.io/1d84341-otp_password_2nd_factor.jpg)

## Password - OTP workflow

Below is a flow diagram indicating the steps involved and how the identifier type and value are populated when the authentication combination is Password - OTP.

![b62f8ab password otp 2nd factor](https://files.readme.io/b62f8ab-password_otp_2nd_factor.jpg)

## Password - Password workflow

Below is a flow diagram indicating the steps involved and how the identifier type and value are populated when the authentication combination is Password - Password.

![7c14cd3 password password 2nd factor](https://files.readme.io/7c14cd3-password_password_2nd_factor.jpg)
