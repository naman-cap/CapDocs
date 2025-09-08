---
title: JFM 2023 | CDP Releases
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
# Improving security of existing API authentication flows through access groups

## Problem Statement

* A lot of brands are on basic authentication for POS client-to-server integration, and it’s not easy to migrate them all to oAuth2 based auth right away.
* We therefore need to improve the security of existing API authentication flows.
* Not all the APIs are used in all kinds of integrations, hence brands using basic auth need to have access restrictions in place. For example, in POS integrations, tills used by the store staff need to perform actions like registering customers, adding transactions, issuing/redeeming points etc. They do not require access to org APIs like creating stores/tills, behavioral events etc.

In order to solve this, we need to have the capability to manage access within the basic auth.

## Overview of the feature

We are improving the security of existing API authentication flows by means of having access control. An access group is a set of Data API and Config API resources with defined permissions. You can use these access groups and can set API endpoint access restrictions for stores. For example, an access group Instore with only Write (POST) access to Customer resources.

By default, Built-in access groups (created by Capillary) are available and can be used for common integrations such as POS, Instore, and Admin. If required, you can also create a Custom access group.

The below image shows the whole overview of the feature. 

![](https://files.readme.io/eb5bfe9-image.png)

### Use case

As a brand, I would like to have access restrictions in place for all the tills to ensure every till performs only certain intended actions, thereby avoiding misuse.

### Feature Description:

*For detailed description, please refer to the user documentation:*[https://docs.capillarytech.com/docs/access-group](https://docs.capillarytech.com/docs/access-group)

* Access groups are defined for each type of integration and the required permissions are set. The tills used for the integration are mapped to the appropriate access groups and can access only those permissions set.
* **Built-in access groups** are created for common integrations like POS, Instore, Admin. These are standard access groups available for all brands and are not editable from the brand’s end.
* **Custom access groups** can be created by brands for other use cases like Wechat, Server-Server integrations etc

In order to achieve this, we now have the following abilities built in. The following operations are possible as a part of this release:

* Brand can now create a custom access group, set permissions for the access group – we can view a set of resources, provide read & write permissions for data & config APIs separately. On successful creation, the user will be notified of the same. Any errors will also be notified to the user.

![](https://files.readme.io/1908800-image.png)

* After creating a custom access group, we can assign stores to this access group by clicking on “Allocate store” which will take us to the store page
* ![](https://files.readme.io/e24549f-image.png)\
  With this release, the brand can now use a default access group if it does not set a custom access group for any of the integrations.
* View default access group and have the ability to edit the default access group
* ![](https://files.readme.io/a643402-image.png)\
  View list of all access groups with group name, status, description, created on, created by, last updated on, last updated by, and the number of allocated stores
* Search for any specific access group
* Edit access groups and change group name, description and resource permissions. The default (built-in) access groups cannot be edited
* ![](https://files.readme.io/c8ec127-image.png)\
  Deactivate custom access groups if there are no stores assigned to it. In case an access group has one or more stores assigned, remove the assigned stores in order to deactivate.

![](https://files.readme.io/fa3b4e6-image.png)

## Impact of this release

For the existing organizations, access groups are already assigned based on the usage analysis. You can create a custom group, if additional accesses are required.

This is to ensure that existing integrations do not face any issues upon completion of this rollout.

Access group rollout will not impact the existing OAuth-based authentication. Access groups are created based on the usage of APIs by the organizations and are provided access accordingly. You can also add the required access group to your store if you need any additional access.

For FAQs, please refer [https://docs.capillarytech.com/docs/access\_control\_faq](https://docs.capillarytech.com/docs/access_control_faq).

## Known Bugs & Product Gaps

### Bugs:

[https://capillarytech.atlassian.net/browse/CAP-95977](https://capillarytech.atlassian.net/browse/CAP-95977)

### Gaps:

* oAuth2 client credentials flow is currently limited to server-to-server integration.
* While creating a new API Client, access is assigned based on the default till code selected and not based on the resource-wise access permissions that are set
* We will provide the ability to select access groups while creating a new API clients

## Release Plan

9th March 2023 - EU 20% Org\
10th March 2023 - EU Full Release\
15th March 2023 - SG 20% Org\
20th March 2023 - SG Full Release\
22nd March 2023 - India 20% Org\
27th March 2023 - India Full Release

## Future Roadmap

Our objective is to ensure that  Standard Enterprise grade security becomes the norm in our APIs usage of any kind - Server to server integrations, POS client to server integrations, B2C mobile/web apps, B2B mobile/web apps, etc. Hence, we would take steps to completely switch to oAuth2 and discontinue Basic authentication for new integrations.

In the present, our oAuth2 client credentials flow is being used extensively in server-to-server integration scenarios. In order to move to oAuth2 completely, we would extend our existing oAuth flow so that it can be used easily in POS client-to-server integration scenarios as well. We will also remove dependency on default till for API scope configuration in oAuth API client creation.

# Group Loyalty on Member Care

We had built the user group entity and group loyalty programs support on our platform a couple of years ago taking the API-first route as always. However, we did not build a front end for viewing group details similar to how we can view a member’s details on Member Care’ Member View page.

Typically, Member Care users - Customer Service Representatives (CSRs) and loyalty program administrators of brands running group loyalty - would want to know, at a group level, details such as

* Group details including list of members, ownership status, member identity details, role in company (if part of hierarchy) and points contribution/contribution history
* Group loyalty details such as current slab, gap to renew, gap to upgrade and tracker details
* Group events including member transactions and points ledger details.

Similarly, at a member level, they would want to know:

* The list of groups the customer is part of, ownership status and points contribution to each group
* Hierarchy if part of a company including association details – parent and children

All of these are now available as a part of member care. If your org has user group loyalty enabled, you should be able to see the groups drop down on the Member Care search page

# PII Deletion – Support on Connect+ and Member Care

We released support for PII deletion on our platform last quarter with the new deletion request API. We have now made additional enhancements in Connect+ and Member Care towards the completion of the PII deletion feature.\
On Connect+, you will find a template to raise data deletion requests in bulk:

![fdcb5fb Connect PII deletion](https://files.readme.io/fdcb5fb-Connect_PII_deletion.gif)

On Member Care, CSRs and loyalty administrators who have permission to handle PII deletion will be able to raise deletion requests directly from a member profile. In the coming quarter, you will be able to put deletion requests through an approval workflow too. As of now, the approval workflow is not supported on Member Care. However, we are working on adding support right now.

# SFTP to SFTP Migration Template with Encryption/Decryption on Connect+

A long pending ask on Connect+ is to add support for encryption on the egress side and decryption on the ingress side. We added support for these back in OND '22 on data ingress templates such as Transaction V2 Add, Customer V2 Add and others supporting decryption and with data egress templates such as CSV to XML converter supporting encryption. However, we were not able to release a generic template for moving files from one SFTP to another with encryption/decryption support. A template for this purpose has been asked by some of our brands who wanted to secure their customer data.\
We now have a generic SFTP to SFTP migration template with encryption and decryption support. This template can be used for picking data from a SFTP location (generated by Data Export Framework on Insights+, for example), encrypting it and then moving the encrypted data to a destination SFTP folder. Note that encryption/decryption are both optional actions and you can choose to use them or skip them.

![15e86d7 SFTP](https://files.readme.io/15e86d7-SFTP.gif)

We will continue to add encryption/decryption support natively on our platform wherever there are data ingress/egress operations happening. Watch out for more in the coming quarters.
