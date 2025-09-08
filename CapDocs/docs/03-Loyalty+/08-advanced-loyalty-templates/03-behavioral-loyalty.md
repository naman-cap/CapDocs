---
title: Behavioral Loyalty
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
Behavioral Loyalty refers to the incentives offered to the customers on the basis of their behaviors, and not on the transactions, as is the case with all other types of loyalty programs described in the modules. These can include activities like registering, updating profiles, etc.

In the system, Behavioral Events need to be set up by going to the organisation settings.

![](https://files.readme.io/40ab923-Screenshot_182.png)

On this page, you will find all the Behavioral Events already set up in the org in question.

![](https://files.readme.io/8920ceb-Screenshot_183.png)

You can create a new event by picking from the library of events that Capillary provides or you can create your own new event as well. If you pick from the library, the event will come with the attribute part of the event already set up.

![](https://files.readme.io/2d0e2ac-Screenshot_184.png)

But if you want to create your new event, you need to select the attribute from the options available.

If the input coming is a free input coming from the source, you can choose "Enum", "Date", "String" or "Double" as data type. If the input maps to an existing attribute that Capillary would have in the system, the data type can be taken as "Product Category", "Product SKU", "Coupon Code", etc. 

![1f07843 Screenshot 189](https://files.readme.io/1f07843-Screenshot_189.png)

Other configurations also have to be added to the attribute as required. And you can also check the "Required" checkbox to make it a mandatory attribute.

![917ded4 Screenshot 186](https://files.readme.io/917ded4-Screenshot_186.png)

In "Add Destination", you have to check the Loyalty box (right now Behavioral Events can only be added in Loyalty).

![](https://files.readme.io/583cba4-Screenshot_187.png)

When you create an event, you can see it with a "Testing Pending" signal, to publish which, the API in question needs to called and reached successfully. Once the event is published, it will be available for use.

![9ded3f9 Screenshot 188](https://files.readme.io/9ded3f9-Screenshot_188.png)

Once this is done, you then have to configure the behavioral events in Loyalty. Head to the program in question. As of now, behavioral events are only present in Promotions.

![0c3e210 Screenshot 192](https://files.readme.io/0c3e210-Screenshot_192.png)

In the activity selector, you can search for Behavioral Events. Only the events that are published show up here.

![17d9db1 Screenshot 193](https://files.readme.io/17d9db1-Screenshot_193.png)

You will select the required event and select the program.

![89ee15d Screenshot 191](https://files.readme.io/89ee15d-Screenshot_191.png)

For Behavioral Events, in Promotion Workflows, in the Points Allocation action, all other parts work similar to Transactional Events but Prorate On works differently. It will only give integer values that need to be selected from the drop down.

In the Expression Editor, you can see a host of different options to write the rule based on different attributes in the event itself.

## Behavioural event support for UserGroup2

As of now, the behavioural events didn’t work for user groups. The behavioural events would only work for individual customers. Now, behavioural events can be configured for user groups as well. 

This is possible at the action level. When configuring an action like Points allocation, issue coupons, etc. you will be able to see a drop down to select “individual” or” User group”. On selecting the user group option, that particular action in the behavioural events will work for the groups in your system. 

Below screenshot helps in understanding:

![2777b20 Screenshot 2023 04 04 at 5](https://files.readme.io/2777b20-Screenshot_2023-04-04_at_5.48.38_PM.png)

## Ability to connect behavioral event to a specific card series

Once behavioral events are configured, whenever a customer exhibits that behavior, they will be triggered and the customer will get the benefits.

Until now, while configuring behavioral events, brands don’t have the ability to create them with respect to card series as an identifier. This became a problem for organizations that are using card series based loyalty programs.

From now, those brands will be able to create behavioral events with respect to card series too. How that works is, while creating the BE, card number will present as an option for identifier type. Using this, even card series based organizations can provide benefits and rewards to their customers based on the card series.

![b5d8fbe Screenshot 2023 05 29 at 2](https://files.readme.io/b5d8fbe-Screenshot_2023-05-29_at_2.04.38_PM.png)

## Behavioral attributes as tags in the communication

As mentioned in the beginning, while creating behavioral events brands can configure "attributes" depending on their use case. Those attributes help the brands in further finetuning the behavioral activity.

Some of the most used attributes are Customer ID, Till code, Date, Product SKU, etc. When the behavioral event is triggered for a customer, the configured attributes will get the corresponding data. 

The best part is, that these "attributes" can be used as "tags" in the creatives/communication flow of the Loyalty+. As of now, we are supporting "attributes" as "tags" in the following places only:

1. Send SMS
2. Send Email
3. Send mobile notification

In loyalty promotions, when the customer activity is selected as one of the behavioral events of the org, then all the eligible "attributes" associated with that particular behavioral event will be available in the above creatives. These attributes will be available as "tags" under the "Generic Events" of the "Add Label" section.

For example, the following is a loyalty promotion of the behavioral event (aka AddedToWishlist).

![1145504 Screenshot 2023 10 09 at 6](https://files.readme.io/1145504-Screenshot_2023-10-09_at_6.05.22_PM.png)

Now, you can see that there is a section called "Generic Events" in the creatives (Send SMS in this case). Now, all the eligible "attributes" of this BE are available as "tags" in the dropdown.

![45a3afd Screenshot 2023 10 09 at 6](https://files.readme.io/45a3afd-Screenshot_2023-10-09_at_6.18.54_PM.png)
