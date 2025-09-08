---
title: JAS 2023 | Loyalty+ | Release notes
excerpt: >-
  In this page, releases that during during the JAS23 (July, August, September)
  quarter will be available. Also, to each of the release notes item, a link to
  the detailed documentation will also be available.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Brand new creation flow for Milestones

A completely revamped user flow is created for using Milestones after this enhancement. With this flow, the user will be able to create Milestones in a single & simple flow. In the very near future, even the configuring of the actions for the Milestone (like point allocation, and coupon allocation) can also be done in the same flow without having to switch to the loyalty promotions section.

More details : [here](https://docs.capillarytech.com/docs/milestones-new-flow)

## RBAC (Role-based access control)

Until now, whenever a user requests access to any organization, the provided access will be kind of super-admin level. This means, with that access, the user can view, edit, approve, and delete configs present in the organization. This could lead to a lot of unintentional changes which might cause a lot of impact. With this enhancement, users can get access of different roles (view, edit, approve, delete) depending on the need.

More details: [here](https://docs.capillarytech.com/docs/rbac-role-based-access-control)

## Loyalty+ → Workflows enhancements

You can now rename sets in all the customer activities / events.Once the changes are saved, then only, the sets will be renamed successfully. Refer to the gif below. 

In the “Makes a Transaction” customer activity, sets are now categorized, for better understanding and well explained descriptions. There are four major categories of sets in the Transaction event, and each one of them has a role to play. So, we have enhanced the UX here, and given a better picture. Don't forget to read the descriptions of each category.\
 Refer to the gif below : 

## Loyalty+ → Workflows→ Scope enhancements

In Scopes,  the selection of Stores became simpler. Currently, it is confusing, as it has exclude/include toggle along with checkboxes. Post enhancement, there will be just the checkboxes, depicting, ticked as included, and unticked as excluded.\
Before : 

After : 

In Scopes, now we have provided proper information, in stores selection, that why a certain store cant be selected. If a store is excluded from the parent set, it cannot be included in any of the child sets. So, the description tells you, that in which parent set, a particular store is excluded. Refer to the image below : 

## Loyalty+ → Strategies → Coupons/Offers enhancements

You can no longer create Offers/Coupons from the Loyalty+ module with expiry as “Along the campaign”. The only expiry available would be “Fixed expiry”. 

You can claim the coupons in Loyalty → Strategies → Offers. But remember, only the coupon series with “Fixed expiry” & Claimed by Loyalty, will be visible in the “Issue coupon” action, under Workflows.\
In case, the coupon selected before the release, does not meet the above criteria, you will see an error in your configuration. This is just an error and nothing will be changed from functionality pov, so if you see this error, just go and select the right coupon. Refer to the image below : 

You can also search the coupons, from the drop down, in the “Issue coupon action” under workflows. 

## Loyalty+ → Workflows → Actions enhancements

In the “Allocate Points action” and all the other actions, where, we get the option to select the source value - “Prorate on”, on which the points will be allocated, currently, there are 3 options present - Event default value, Current aggregate & Previous aggregate. But, from these, the later two, only work in the case of Trackers.\
So, we have disabled them, in the Allocate points action, in the regular sets, and they would only be enabled, when the action is used in trackers. Refer to the image below :

## Introducing "points to reward conversion" workflow

The "Auto Points conversion to reward" feature allows the automated redemption of a certain number of points based on a defined value and issues a reward. The reward can be a coupon, cart promotion, gift voucher, or third-party coupon.

For example, When the user purchases and gets 100 points, the points should be deducted from the user account and they will get a $5 off coupon code and when they reach 200 points, they will get a 2X $5 off coupon code.

## Event Simulation(TransactionAdd Event)

The simulation API helps to enhance brand engagement and boost guest conversions into loyal customers. It accomplishes this by providing customers with precise information about the points they can earn for specific purchases, including a detailed breakdown of both base and promotional point earnings at the line item level. For more information, refer to the [event simulation API documentation](https://docs.capillarytech.com/reference/simulate_transactionadd).

## Minor but impactful enhancements

1. Now, “Evaluation start” is a set category available in all the customer activities, with relevant descriptions in each activity/event.
2. In the Subscription-based loyalty programs, benefit linking is no longer mandatory.
3. The “Activity reward current limit” tab, which is the activity/event level capping window, is removed from the Loyalty Promotion workflows, as this is activity level capping, and should be set in the loyalty core workflows.
4. There was an enhancement made last quarter, where we removed the “Include” & “Exclude” functionality, from Scopes, in Loyalty workflows. There were some issues in it, and hence it is revoked. So, now, the older version is back, and you can continue using include and exclude toggles, in the scope.

## Advanced capping capabilities

As of now with our existing capping capabilities, we all know that only the "points" can capped and this is a major limitation for several brands. To solve this problem, brands are depending on indirect methods like set-level cappings to achieve the use cases. But, because of these multiple set-level cappings that brands are configuring, we are encountering a huge increase in the number of sets. This leads to issues like set complexity, a decrease in computational speed, an increase in workflow processing time, etc..

Along with that, brands have to create the capping type of milestones first in order to set “customer-level cappings”. We felt this was a bad user experience as the user had to switch between 2 different modules.

With this latest enhancement of cappings, we have improved the capping in such a way that all the above issues are solved & along with that we have added a lot of new capabilities too (Cappings of type Lineitem amount, Lineitem quantity, etc..). We believe that you are going to have a very good time with these advanced enhancements of capping.

Please read here for more details: [here](https://docs.capillarytech.com/docs/advance-capping)

## customerActivitiesHistories API

As of now, we do not have an API that can fetch all the subscription (supplementary) or coalition (external) programs of a customer. This includes the programs in the past & the present programs. Because of this, brands are using indirect hacks whenever such use cases arise.

With this enhancement, we have built an API that can give you all subscription/coalition programs of a customer (past & present) in an extremely simple way.

More details here: [API](https://docs.capillarytech.com/reference/customeractivityhistories)

## Behavioral attributes as tags in the communication.

After this enhancement, now brands can use the "attributes" of behavioral events as "tags" in the creatives. We are supporting these in 3 creatives as of now:

1. Send SMS
2. Send Email
3. Send mobile notification

More details [here](https://docs.capillarytech.com/docs/behavioral-loyalty#behavioral-attributes-as-tags-in-the-communication)
