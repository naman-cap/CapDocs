---
title: Overview
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
IAM, or Identity and Access Management, is used to control access to data and ensure that only users with the correct permissions can access specific resources. In Capillary, these resources can be a user's identification details, or a brand’s mobile application or Capillary APIs.

![345328166d45b8bc2e082487709fbf93db3c32961ea27056be41f9675ee56ae7 IAM](https://files.readme.io/345328166d45b8bc2e082487709fbf93db3c32961ea27056be41f9675ee56ae7-IAM.jpg)

Access to these resources is managed through **Authentication** and **Authorization**:

* **Authentication** is the first layer of security, verifying a user's identity through methods such as email ID and password or other authentication mechanisms.  
* **Authorization** is the second layer, determining what actions a user can perform after logging in. For example, a user may be able to access a website, but their ability to perform certain actions (e.g., viewing reports or modifying data) depends on their authorization level.

IAM is not always limited to interactions between a human user and a system (e.g., a user logging into a brand’s mobile app). It can also apply to machine-to-machine interactions (e.g., a brand’s POS system authenticating itself to securely access Capillary APIs). Different types of IAM are used for different purposes:

* **[Customer IAM (CIAM) for end customers](https://docs.capillarytech.com/docs/customer-iam-ciam-for-end-customers)** - Designed for customer-facing applications
* **[Machine-to-machine (M2M) IAM for services](https://docs.capillarytech.com/docs/machine-to-machine-m2m-iam-for-services)** - Designed for interactions between servers.
* **[Workforce IAM for employees](https://docs.capillarytech.com/docs/workforce-iam-for-employees)** - Authentication for employees accessing Capillary's internal systems and applications.
