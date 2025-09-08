---
title: RBAC (Role-based access control)
excerpt: 'View Mode: Configurable Access Control'
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# View Role in Loyalty Module

**Overview**\
The View Mode feature enables organizations to customize data access permissions based on user roles. It refines the user interaction by restricting the ability to modify or accidentally delete information. This feature is especially pertinent for managing loyalty programs.

**Background**\
Responding to a frequent enterprise-level request, View Mode addresses the need for granular control over different aspects of loyalty programs. Clients have expressed the importance of role-specific access settings, either Read or Write, for different team members.

**Use-Cases**\
Data Monitoring: Users who only need to review Loyalty Module configurations, promotions, and programs can have restricted access to prevent accidental changes.\
Role-Based Permissions: Users can be assigned specific access levels, allowing or disallowing the creation and modification of promotions, loyalty programs, tier strategies, points strategies, and tracker conditions.

**Need for View Mode**\
Unrestricted access to the Loyalty Module can result in unintended changes that have substantial implications, including potential negative effects on ROI and brand reputation. View Mode aims to mitigate these risks by providing different modes of access.

**Modes**

1. Read (View): This setting permits 'View Only' access, preventing unintentional configuration changes.
2. Write (Create/Edit): Users with this permission level can create and modify elements like Promotions, Loyalty Programs, Tier Strategies, Points Strategies, and Tracker Conditions.

**Benefits**

1. Risk Mitigation: The risk of accidental data alteration or deletion is significantly reduced.
2. Operational Efficiency: Team members can access only the data and features necessary for their roles, thereby ensuring a focused and efficient workflow.

![feb89f3 Screenshot 2023 07 24 at 6](https://files.readme.io/feb89f3-Screenshot_2023-07-24_at_6.45.30_PM.png)

### View (Read Only) in Loyalty +

## **Program Level Changes:**

* Disabled the functionality of edit access for the members who have view-only Access.
* Users can view Program configurations within the organization, user can check the tiers information, Rewards Currency, Trackers, workflow, etc.

Image: Edit Program Functionality is disabled.

![a64b86a LP1](https://files.readme.io/a64b86a-LP1.png)

In phase 1 we have enabled visibility of the below actions. We will add support for other actions later

* Points allocation action
* Issue coupon
* Forward to set
* Tracker Evaluation

![cca1a6d LP2](https://files.readme.io/cca1a6d-LP2.png)

**Points Allocation Action**: Within the point allocation actions, the edit/save options are completely disabled for a user with view-only access as shown in the image attached below. 

![492f4a9 LP3](https://files.readme.io/492f4a9-LP3.png)

**Forward to set action**: Once the settings are saved, a user can not play around with the toggle button to change the existing settings done.

![b1d27f9 PP7](https://files.readme.io/b1d27f9-PP7.png)

**Trackers**: Within the Workflow, Users with view-only access can see which tracker is been configured but can’t change the tracker. To view which tracker has been configured in the action, the user has to click on the "eye" icon on the right side of the tracker action bar.

![76df656 TR1](https://files.readme.io/76df656-TR1.png)

## **Promotions level changes:**

**Create promotions:** The view mode in loyalty promotions disables the “Create Promotion” functionality and thus a user with view-only access can not “Create Promotion”.

![0917bae PP1](https://files.readme.io/0917bae-PP1.png)

**Edit Promotions:** Users can view the existing promotions and respective configuration but on clicking the three dots, the EDIT option is disabled.

![7ba5b88 PP2](https://files.readme.io/7ba5b88-PP2.png)

**Promotion Workflows:** Within the Promotion workflows with a view access 

1. The user can not change or add the set conditions.
2. The user can not change the workflow expression as well.

![9ecfa5b PP3](https://files.readme.io/9ecfa5b-PP3.png)

A user with view access cannot change actions or edit the actions, In the below image the functionality to enable or disable existing settings of the “forward to set” action can not be altered and thus a user with view access of promotions can not edit the existing configurations of the promotions.

![233a889 PP5](https://files.readme.io/233a889-PP5.png)

**Advance Settings of Promotions:** With the view-only access, a user can not edit the advance settings as well. In the image attached below all the edit, save, and toggle buttons are disabled and thus can’t be changed.

![8c8f304 PP6](https://files.readme.io/8c8f304-PP6.png)

### Way to get View Only Access :

* To enable the view-only access please write to the access team.
* If you want to have edit/approve/delete access, make sure you are tagging your manager in the access request email before sending it to the access team.
