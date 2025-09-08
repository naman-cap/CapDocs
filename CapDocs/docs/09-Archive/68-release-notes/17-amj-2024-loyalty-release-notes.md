---
title: AMJ 2024 | Loyalty+ Release notes
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
## Ability to create milestones/streaks in the past

As of today, one can create a milestone/streak only from the current date. However, with this enhancement, now users will be able to create a milestone/streak in the past as well. 

This helps brands in creating backdated promotions of milestones/streaks type unlocking new avenues. 

**More details here:**[Milestones](https://docs.capillarytech.com/docs/milestones-new-flow#milestone-details) & [Streaks](https://docs.capillarytech.com/docs/configure-streaks#basic-details)

## Expiry conditions based on extended fields

After seeing several point-expiry-based use cases in the market (where few of them do not fall under any of our existing expiry strategies), we have built this new capability where the expiry date can be sent via an extended field. 

Brands can send whatever date as per whatever logic they want, and the expiry will happen accordingly.

**More details here:**[Click here](https://docs.capillarytech.com/docs/points-1-1#expiry-conditions)

## Enrol/Unenrol API for milestones/streaks

With this brand-new API, now customers can be enrolled/unenrolled into a milestone/streak via APIs without depending on the UI. So, brands would be able to enroll/unenroll their users into a milestone/streak whenever they want (at the beginning, in the middle of the duration, etc.) as per their use case in an easy manner. 

**More details here:**[Click here](https://docs.capillarytech.com/reference/enrol-customer-to-a-milestone)

## Import profile to update customer's slab expiry date

We have enhanced the slab-related import profile where you can explicitly override the slab expiry dates of several customers in a single shot. 

This slab expiry date will override the existing expiry date of the customer, and this can be very helpful to brands in a bunch of user scenarios.

**More details here:**[Click here](https://docs.capillarytech.com/docs/points-slabs#slab)

<br />

## Breaking the shackles of trackers, and letting them be used anywhere in loyalty.

Until now, once a tracker is created, it has life only inside the tracker/points-tracker set of workflows. Now, we have added support for the following profiles using which the tracker value of a customer can be fetched in any set of the workflows, and can be used even in the promotions. Yes, that's right, now trackers can be used in the promotions as well using the following profiles.

* currentCustomer.trackerValueBeforeEvent("Tracker name", "Case name")
* currentCustomer.trackerValueCurrentEvent("Tracker name", "Case name")

To know more details: [here](https://docs.capillarytech.com/docs/avgbasket-size#attributes---tracker-based)

<br />

## Giving more boost to Milestones/Streaks to be used in any customer activity.

Once a milestone/streak is created, the customer's achievement (and corresponding reward allocation) can be done only via the "milestone or streak is updated (aka target-period elapsed)" customer activity so far. To solve this problem, a bundle of new profiles is created that can be used in any customer activity & access the customer's current milestone/streak status. For example:

* currentCustomer.targetAchievedInPeriod("targetName", "periodName") brings the value achieved by the customer in a specific period of a specific target.
* and many more

To know more details: [here](https://docs.capillarytech.com/docs/avgbasket-size#attribute---milestones--streaks)

<br />

## Promised points conversion based on behavioral event's attribute

A brand new delayed-accrual strategy support is added for behavioral events, using which the promised points can be converted to regular points based on the attribute of the behavioral event. This can unlock many customized use cases, and here is one example:

* Deadpool wants to gift 1000 points to Wolverine on the latter's birthday. But being him, the former is not sure if he can remember that so looking for a solution:
* After this enhancement, Deadpool can simply purchase the points in the promised state (with the DOB of Wolverine as the value of the attribute) & that's it. Now, these promised points will be converted to regular points on the given date.  

To know more details: [here: go to the 7th point (delay strategies)](https://docs.capillarytech.com/docs/actions#transaction-point-allocation--allocate-points-action)

<br />

## Enhancements in alternate currencies

Now, the alternate currencies become more powerful with the following enhancements:

* Support for return & return re-evaluation: [here](https://docs.capillarytech.com/docs/alternate-currencies)
* Event notifications: [here](https://docs.capillarytech.com/docs/event-schema-payload#alternate-currencies)
* Source onboarding of alternate currencies tables

## Enhancements in Milestones/Streaks

Now, the streaks become much more powerful with the following enhancement:

* Sub-targets in streaks: [here](https://docs.capillarytech.com/docs/configure-streaks#sub-targets-in-streaks)
* Event notifications: [here](https://docs.capillarytech.com/docs/event-schema-payload#streak-level-achievement)
* 3 time-dimensional tracking in Milestones/Streaks: [here](https://docs.capillarytech.com/docs/milestones-new-flow#target-details)
  1. After this enhancement, now milestones/streaks can be used to track across 3 time dimensions parallelly unlocking some of the difficult use cases in the market. For example:\
     **Use case 1:** Drink apple juice 1 time a day, 4 times a week, 10 weeks a quarter.\
     **Use case 2:** Walk 5k steps a day, 6 days a week, 11 weeks a quarter.
* Individual target benefits allocation in unified targets: [here](https://docs.capillarytech.com/docs/unified-milestones#creating-a-unified-target)

## API Enhancements

Following are some of the major API enhancements made to help brands use them more flexibly:

* API to enrol/un-enrol/re-enrol users into a milestone/streak: [here](https://docs.capillarytech.com/reference/enrol-customer-to-a-milestone) & [here](https://docs.capillarytech.com/reference/un-enrol-users-into-a-milestonestreak)
* Enhancements in getUserTargets: [here](https://docs.capillarytech.com/reference/getusertargetgroupdetails)

1. A new query param to bring only the active targets
2. Availability of achievement date in the getUserTargets for milestones & streaks
3. Timestamp along with the date for each cycle 
4. Returning all streak-levels information
