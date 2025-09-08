---
title: Enhancing Rewards Catalog with Custom Fields
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
**Background**

In order to create a flexible rewards marketplace, it is important to give brands the ability to include additional, custom information when creating and issuing rewards. This custom data can be used for various purposes such as displaying personalized information within the app or website, and for accounting or partner reconciliation purposes.

Additionally, this custom data can also help brands to track and analyze the performance of their rewards, identify customer preferences and behavior, and make data-driven decisions to improve their rewards strategy. It can also be used to personalize communication with customers, and to segment and target customer groups based on their preferences and behavior. 

Furthermore, the ability to include custom data can also help brands to comply with legal and regulatory requirements, and to report on the performance of their rewards to stakeholders.

**Points to note:**

* Custom fields can be created, updated, or disabled
* There can be only one active custom field with the same name. If the existing custom field is disabled, then a new custom field with the same name can be created
* It is mandatory to define the default value for a custom field which is mandatory for the reward. In case a reward doesn't define a mandatory custom field with it, the default value will be considered
* Once the custom field is disabled, it can't be enabled again
* Only active custom fields will be returned in all the getcalls

> 📘 There is no limit on the number of custom fields that can be defined at an org level for rewards catalog.

**UI for the configuration will come in future sprints. Refer to the below images for reference.**

![](https://files.readme.io/9f7fc6c-image1.png)

![](https://files.readme.io/f3ff2c8-image2.png)

For more information on the APIs, check below links:

 [create custom field](https://docs.capillarytech.com/reference/post-create-custom-field)

[update custom field](https://docs.capillarytech.com/reference/update-custom-field)

[get all custom fields](https://docs.capillarytech.com/reference/get-custom-field)
