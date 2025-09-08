---
title: Backup
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
1. **Drag & Drop** is the Engagement channel that you want to use for engaging your customers on the desired path. Currently, SMS and Email are supported. 
2. Hover over the block to see the options to configure the block. You can also configure the block by clicking on it.
3. Click on the Block to configure the creative that you want to send your customer.  
4. Add an Engagement name for your communication 
5. Click Add Creative to configure the content that you want to send your customers.(CTA to the adding the creative how-to.
6. Click Add Incentive to configure the Offer that you want to provide to your customers(CTA to add incentive how-to).
7. You can set up the desired Delivery Settings for your communication by clicking Show.
8. Add delivery settings steps.
9. Click **Done** to set up the Engagement block.
10. You can see the set-up Engagement details in the path by Hovering over the Block. This has the details of the type of channel used, the attached creative and the incentive attached.

### Configure Flow Control

To configure a Flow Control Block - 

1. Drag & Drop the preferred block in any of the paths, to control customer experience based on their preferences and behaviour. Currently, Wait & Wait till Event & Decision split blocks are the available blocks.

#### To set up a Wait block -

1. Hover on the block to see the options to delete and configure it. You can also configure the block by simply clicking on it.
2. Specify the Waiting time by either selecting Wait for a duration to select a fixed duration or Wait until a date to select a particular date. Currently, only Wait for a Duration is supported.
3. Specify the Duration in terms of a number
4. Select the unit of the Duration added. This can be Days, Hours, Weeks, Months or Years
5. By default, Days are selected for the time unit
6. Click Done to configure the Wait Block

   You can see the block added in the path that shows the wait time.

#### To Set up a Wait till event block:

1. Hover on the block to see the options to delete and configure it. You can also configure the block by simply clicking on it.
2. Event Path: This path would be followed by the customers who satisfy the conditions set up by the user. 
3. Specifies the event performed by the customer on which the conditions would be written.
4. This path is followed by a customer when he doesn’t follow the Event-based condition set up or doesn’t perform the event.
5. This is the Wait Duration that can be set up by the user. A customer who doesn’t follow the event-based conditions or doesn’t perform the event would Wait for this specified Duration before proceeding in the path 
6. Click Select Event to specify the Event performed by the customer on which the conditions would be written.
7. Click Add entry paths to define the condition on the event selected.
8. Select the wait time for the customer by specifying the Duration. The Duration can be Hours, Days, Weeks, Months or Years.
9. Click Done to configure the Wait till event Block.
10. You can see two different paths created for the customers to follow. 

#### To set up a Decision split block

Decision split can split customers into different paths based on customer's KPIs

## Components of Journeys

Capillary Journey product is composed of different components that decide how the user will move in the Engagement flow -

### Entry Triggers: Entering a Journey

These are the points where customers enter the journey. Triggers are basically a set of rules that decide which customers to enter the Journey. A Trigger sets the context of a Journey. 

Entry Triggers are further classified into User initiated triggers and 

#### 1. User-Initiated Triggers

These are the entry triggers or conditions that are based on many user properties such as user events, audience lists etc. When a user satisfies the conditions set, he/she will enter the Journey. Events are evaluated in real-time.   

User-Initiated triggers are further classified into user events and audience lists -

* **User Events**: This Entry trigger is defined based on the user events. Marketers can set up upon which customer event a customer enters the journey. This includes transactional events such as purchases, transaction discounts, points redeemed etc. 

   Example: Include customers in the journey whose transactional value is greater than $10,000.

![27e0af2 GT10REj5BMHXrcxbv6rQCn C3pAhaI6Bcg](https://files.readme.io/27e0af2-GT10REj5BMHXrcxbv6rQCn-C3pAhaI6Bcg.png)

* **Audience list**: Brands can upload a list of users or create an Audience Group using filters and and initiate a journey for them.\
   A customer enters a journey through these Entry triggers and then follows certain conditions to personalize the engagement flow. These can be set up by the Building blocks of Journeys 

### Building Blocks

These are customizable in-built logic variables that you define while creating a Journey. 

#### **Engagements**:

The engagement block contains different types of channels that can be used to engage with your customers. A marketer can add an engagement block (of a particular channel) and can configure the content in that block (specific to that channel) to reach out to users. 

 It is a Multi-channel engagement block which supports Email and SMS. It's easy to set up multiple communications with a simple drag & drop of the channels. You can set the content in the same block.

 Example: Include customers whose transactional value is greater than $10,000 in the Journey. Furthermore, communicate the discounts availed by these customers via SMS. 

#### **Flow control**:

It helps you control the flow by applying conditions to user events or preferences. 

 This Building Block controls the customer experience and Journey flow by configuring conditions on the behaviour or preferences of the user in the Journey

 These are differentiating conditions set by the marketer to define a flow for the user who entered a journey. It is an extra point of decision-making where the user is pushed into a different or the same flow based on certain conditions on Time or Event based preferences.  

 Flow Control is further divided into **Wait**, **Wait till event**, and **Decision split**. 

1. **Wait**\
   The Wait blocks let the users wait for a defined amount of time before they continue a journey. Basically, the user awaits its Journey flow for some time defined by you to achieve the desired objectives. The wait can be for X amount of Days/Months/weeks before the user can proceed in the flow.\
      Example: 
   * Include customers whose transactional value is greater than $10,000 in the Journey. 
   * Furthermore, communicate the discounts availed by these customers via SMS channel. 
   * Wait for customers to avail of these discounts and send a follow back communication after waiting for a specific period of time

2. Wait till event\
   This block waits for the user from proceeding in the Journey flow until the user has performed the desired User events or actions.\
      Basically, you set up certain conditions for the events performed by the customer. If these event conditions fit with the user's actions, the user proceeds along the path. If not, then the user Waits for a specific amount of time before entering the next block\
      Example:  

* Include customers whose transactional value is greater than $ 10,000 in the Journey. 
* Furthermore, communicate the discounts availed by these customers via SMS channel. 
* Wait for the customer to avail of these discounts and send a follow back communication after waiting for a period of time, let’s say 5 days. 
* Incentivise the customers who have redeemed the coupon after 5 days but have customer points of more than 150. If this condition is not followed, the user waits another 3 days before proceeding to the next block.

3. Decision Split

   The Decision split divides the flow into different paths. If the user actions or attributes match the conditions specified, the User goes to the former path. If not then go to other paths.
