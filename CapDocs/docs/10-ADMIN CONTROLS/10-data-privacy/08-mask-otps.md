---
title: Mask OTPs
excerpt: This page provides you with information on masking OTPs.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
When enabled, OTPs will be hidden in the following GET API calls:

* [v1.1/customer/interactions](https://docs.capillarytech.com/reference/get-customer-interactions)
* v2/customers/interactions

![feaf34a SMS](https://files.readme.io/feaf34a-SMS.png)

Simultaneously, you have the option to configure it in a manner where users with specific access privileges can still access and view the OTPs. In such cases, an internal API `v2/internal/customers/interactions` is employed.
